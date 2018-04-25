<template lang="pug">
  div.referral__upload-ref
    h3 Upload your referral
    h4 Attach a file from your computer below to continue to book your MRI scan
    div.dropbox(v-if="!image")
      div
        input(type="file" @change="onFileChange" class="input-file")
        p Drag your file(s) here
          br
          | or click to browse
    div(v-else)
      h4 {{ image.name }}
      Button(id="upload-btn" classes="btn-big small-text" text="Confirm Upload" @click.native="upload")
      Button(id="remove-upload-btn" classes="btn-big small-text" text="Delete File" @click.native="removeImage")
</template>

<script>
  import { UPLOAD_FILE } from '~/mutations'

  export default {
    name: 'UploadReferral',
    data: () => ({
      success: false,
      image: null
    }),
    methods: {
      onFileChange(e) {
        var files = e.target.files || e.dataTransfer.files
        if (!files.length) return
        this.success = true
        this.image = files[0]

        const uploadPath = `./uploads/${this.image.name}`
        this.$apollo.mutate({
          mutation: UPLOAD_FILE,
          variables: {
            file: this.image,
            path: uploadPath
          }
        })
      },
      removeImage: function (e) {
        this.image = ''
        this.success = false
      }
    }
  }
</script>

<style lang="postcss">
  @import 'global/variables';

  .dropbox {
    outline: 2px dashed grey;
    outline-offset: -1rem;
    background: $white;
    color: dimgray;
    margin: 0 auto;
    padding: 2rem 5rem;
    position: relative;
    cursor: pointer;
    transition: all .3s;

    &:hover {
      background-color: $lighter-gray;
      color: $blue;
      outline: 2px dashed $blue;
    }

    & p {
      font-family: 'Raleway', sans-serif;
      font-size: 20px/24px;
      text-align: center;
      padding: 50px 0;
    }
    img {
      max-width: 100%;
    }
  }

  .input-file {
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    cursor: pointer;
  }
</style>
