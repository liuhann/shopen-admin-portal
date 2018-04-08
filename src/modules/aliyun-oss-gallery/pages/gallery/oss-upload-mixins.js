import imageModel from '../../models/image'

export default {
  data () {
    return {
      action: '',
      oss_data: {
      }
    }
  },

  methods: {
    async ossBeforeUpload (file) {
      const policy = await imageModel.getOssPolicy('user-text', this.ctx)
      this.action = policy.host
      this.oss_data = {
        key: `user-test/file.name`,
        policy: policy.policy,
        signature: policy.signature,
        OSSAccessKeyId: policy.OSSAccessKeyId,
        'success_action_status': '200', // 让服务端返回200,不然，默认会返回204
        'x-oss-meta-filename': file.name
      }
    },
    // 获取文件名后缀  来自  https://stackoverflow.com/questions/190852/how-can-i-get-file-extensions-with-javascript
    fileExtension (fname) {
      return fname.slice((fname.lastIndexOf('.') - 1 >>> 0) + 2)
    }
  }
}
