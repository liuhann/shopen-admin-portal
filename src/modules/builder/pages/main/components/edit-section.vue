<template>
  <div class="edit-section">
    <div class="header">
      <div class="title">配置 {{section.title}}</div>
      <el-button class="btn-close" type="text" icon="el-icon-error" @click="close"></el-button>
    </div>
    <div class="config">
      <div class="field" v-for="(item, key) in section.data" :key="key">
        <label>{{key}}</label>
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
      border-bottom: 1px solid #eee;
      padding: 5px 10px;
      line-height: 36px;
      display: flex;
      flex-wrap: wrap;
      label {
        flex:1;
      }
      >div.inline {
        flex: 4;
      }
      >div.block {
        width: 100%;
      }
      .text {
        input {
          background-color: #fff;
          -webkit-appearance: none;
          padding: 8px;
          border: 1px solid #dbdbdb;
          box-sizing: border-box;
          color: #363636;
          border-radius: 4px;
          box-shadow: inset 0 1px 2px rgba(10,10,10,.1);
          width: 100%;
        }
      }
      .textarea {
        textarea {
          background-color: #fff;
          -webkit-appearance: none;
          padding: 8px;
          border: 1px solid #dbdbdb;
          box-sizing: border-box;
          color: #363636;
          border-radius: 4px;
          box-shadow: inset 0 1px 2px rgba(10,10,10,.1);
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
