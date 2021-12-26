<template>
  <div class="text-input">
    <a-form-item
      :label="section.required ? `${section.title} (required)` : section.title"
    >
      <a-upload :multiple="true" :file-list="fileList" @change="handleChange">
        <a-button> <a-icon type="upload" /> Upload </a-button>
      </a-upload>
    </a-form-item>
  </div>
</template>

<script>
export default {
  props: {
    section: {
      required: true
    }
  },
  data() {
    return {
      fileList: []
    }
  },
  methods: {
    handleChange(info) {
      let fileList = [...info.fileList]

      // 1. Limit the number of uploaded files
      //    Only to show two recent uploaded files, and old ones will be replaced by the new
      fileList = fileList.slice(-2)

      // 2. read from response and show file link
      fileList = fileList.map((file) => {
        if (file.response) {
          // Component will show file.url as link
          file.url = file.response.url
        }
        return file
      })

      this.fileList = fileList
    }
  }
}
</script>

<style scoped>
.text-input {
  margin: 20px 0;
  padding: 20px 40px;
  border: 1px solid #f1f1f1;
}
</style>
