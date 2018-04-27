<template>
  <div class="edit-section">
    <div class="header">
      <div class="title">配置 {{section.title}}</div>
      <el-button type="primary" size="mini"  @click="close">确定</el-button>
    </div>
    <div class="config">
      <div class="field" v-for="(item, key) in section.data" :key="key">
        <label>{{item.label || key}}</label>
        <div class="text" v-if="item.type==='text'">
          <input type="text" v-model="item.value">
        </div>
        <div class="textarea" v-if="item.type==='textarea'">
          <textarea v-model="item.value" rows="4"></textarea>
        </div>
      </div>
    </div>
    <div class="footer">
      <el-button icon="el-icon-delete" type="danger" size="mini" @click="remove">删除</el-button>
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
    .title {
      flex: 1;
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
      line-height: 20px;
      display: flex;
      label {
        flex:1;
      }
      >div {
        flex: 3;
      }
      .text {
        input {
          padding: 5px;
          box-sizing: border-box;
          width: 100%;
        }
      }
      .textarea {
        textarea {
          padding: 5px;
          box-sizing: border-box;
          width: 100%;
        }
      }

    }
  }
  .footer {
    position: absolute;
    display: flex;
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
