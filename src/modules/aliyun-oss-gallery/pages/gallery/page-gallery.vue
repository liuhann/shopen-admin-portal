<template>
  <div class="page-image-gallery">
    <div class="left-filter flex-column">
      <div class="by-name"></div>
      <div class="tags"></div>
    </div>
    <div class="center-images flex-column">
    </div>
    <div class="right-upload-modify flex-column">
      <!--<div class="croppa-wrapper">
        <croppa v-model="croppa"
                :width="300"
                :height="300"
                placeholder="请选择图片"
                placeholder-color="#000"
                :placeholder-font-size="14"
                canvas-color="transparent"
                :show-remove-button="true"
                :remove-button-size="15">
        </croppa>
      </div>-->
      <el-upload
        ref="upload"
        :action="action"
        multiple drag
        class="uploader"
        :data="oss_data"
        :before-upload="ossBeforeUpload"
        :auto-upload="true"
        :on-success="uploadSuccess"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传图片文件，且不超过10M</div>
      </el-upload>
    </div>
  </div>
</template>

<script>
import {Upload, Button} from 'element-ui'
import ossMixins from './oss-upload-mixins'

// crop related
import Croppa from 'vue-croppa'
import Vue from 'vue'
import 'vue-croppa/dist/vue-croppa.css'
Vue.use(Croppa)

export default {
  name: 'page-gallery',
  components: {
    'el-upload': Upload,
    'el-button': Button
  },
  mixins: [ossMixins],
  data () {
    return {
      croppa: {},
      croppaOpts: {
      }
    }
  },
  computed: {
  },

  methods: {
    submitUpload () {
      this.$refs.upload.submit()
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handleuploadSuccess (response, file, fileList) {

    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>

<style lang="less">

.flex-column {
  display: flex;
  flex-direction: column;
}

.page-image-gallery {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  .left-filter {
    width: 200px;
  }
  .center-images {
    flex: 1;
    padding: 20px;
    border-left: 1px solid #d9d9d9;
    border-right: 1px solid #d9d9d9;
    overflow-y: auto;
  }
  .right-upload-modify {
    background-color: #fff;
    padding: 10px;
    width: 200px;
    .croppa-wrapper {
      padding: 10px;
      background-image: linear-gradient(45deg, #d9d9d9 26%, transparent 25%, transparent 74%, #d9d9d9 74%, #d9d9d9),linear-gradient(45deg, #d9d9d9 25%, transparent 25%, transparent 75%, #d9d9d9 75%, #d9d9d9);
      background-size: 18px 18px;
      background-position: 0 9px, 9px 18px;
      background-clip: content-box;
      .croppa-container {
        background-color: transparent;
      }
    }
  }
  .el-upload-dragger {
    width: 200px;
    height: 120px;
    .el-icon-upload {
      font-size: 40px;
      color: #c0c4cc;
      margin: 26px 0 1px;
      line-height: 45px;
    }
  }
}
</style>
