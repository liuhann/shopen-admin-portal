<template>
  <div class="edit-section">
    <div class="header">
      <div class="title">配置 {{section.title}}</div>
      <el-button class="btn-close" type="text" icon="el-icon-error" @click="close"></el-button>
    </div>
    <div class="config">
      <div class="field" v-for="(item, key) in section.data" :key="key">
        <label>{{item.desc || key}}</label>
        <div class="text inline" v-if="item.type==='text'">
          <input type="text" v-model="item.value">
        </div>
        <div class="textarea inline" v-if="item.type==='textarea'">
          <textarea v-model="item.value" rows="4"></textarea>
        </div>
        <div class="edit-image block" v-if="item.type === 'image'">
          <div class="image-box" :style="{
            backgroundImage: 'url(' + item.value + ')'
          }">
            <el-button type="success" size="small">更换</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <el-button icon="el-icon-delete" circle type="danger" @click="remove"></el-button>
    </div>
  </div>
</template>

<script>
import {Button} from 'element-ui'

export default {
  name: 'edit-section',
  components: {
    'el-button': Button
  },
  props: {
    section: {
      type: Object
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },

    remove() {
      this.$emit('remove')
    }
  }
}
</script>

<style lang="less">
.edit-section {
  .header {
    line-height: 38px;
    font-size: 16px;
    padding: 0px 10px;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .title {
      flex: 1;
    }
    .btn-close {
      font-size: 20px;
      margin: 0;
      padding: 0;
    }
  }

  .config {
    position: absolute;
    top: 38px;
    left: 0;
    right: 0;
    bottom: 46px;
    overflow-y: auto;
    .field {
      padding: 5px 10px;
      margin-bottom: 10px;
      line-height: 36px;
      label {
        color: #626361;
        margin-bottom: 10px;
      }
      .text {
        input {
          padding: 10px;
          border: 1px solid #E5E8EC;
          box-sizing: border-box;
          color: #4D4E4C;
          background-color: #F7F8F9;
          border-radius: 4px;
          width: 100%;
        }
      }
      .textarea {
        textarea {
          box-sizing: border-box;
          padding: 10px;
          border: 1px solid #E5E8EC;
          color: #4D4E4C;
          background-color: #F7F8F9;
          border-radius: 4px;
          width: 100%;
        }
      }
      .edit-image {
        .image-box {
          background: #fefefe;
          background-position: center;
          background-size: cover;
          box-sizing: content-box;
          width: auto;
          margin: 5px;
          border: 1px solid #efefef;
          height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
  .footer {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-around;
    bottom: 0;
    left: 0;
    right: 0;
    height: 46px;
    border-top: 1px solid #eee;
    line-height: 46px;
    overflow-y: auto;
  }
}
</style>
