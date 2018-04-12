<template>
<div class="gallery-filter-wrapper">
  <div class="by-name">
    <h3 class="group-title">
      <span class="title">按图片名称搜索</span>
    </h3>
    <div class="name">
      <el-input
        placeholder="请输入图片名称"
        size="mini"
        v-model="searchFileName">
      </el-input>
    </div>
  </div>

  <div class="tags">
    <h3 class="group-title">
      <span class="title">标签</span>
      <div class="actions">
        <el-button size="mini" @click="createTag" type="text" >创建</el-button>
        <el-button size="mini" @click="manageTag" type="text" >管理</el-button>
      </div>
    </h3>
    <ul class="tag-list">
      <li :class="filteredTag===''?'checked': ''" @click="tagChecked('')">
        <div class="info">
          <span class="filter-label">所有图片</span>
        </div>
      </li>
      <li v-for="tag in tags" :key="tag.key" :class="filteredTag===tag.key?'checked': ''" @click="tagChecked(tag.key)">
        <div class="info">
          <span class="filter-label">{{tag.key}}</span>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import {Button, Input} from 'element-ui'
import DictonaryDAO from './dict-dao'

export default {
  name: 'gallery-filter',
  components: {
    'el-button': Button,
    'el-input': Input
  },
  data () {
    return {
      tags: [],
      filteredTag: '',
      searchFileName: ''
    }
  },

  created () {
    this.dictdao = new DictonaryDAO(this.ctx.servers.dictionary)
    this.reloadTags()
  },
  methods: {
    async reloadTags () {
      this.tags = await this.dictdao.list('image-tags')
      this.$emit('tags', this.tags)
    },

    tagChecked (key) {
      this.filteredTag = key
      this.$emit('tag', this.filteredTag)
    },

    createTag () {

    },
    manageTag () {

    }
  }
}
</script>

<style lang="less">
.gallery-filter-wrapper {
  .group-title {
    padding-left: 14px;
    padding-right: 12px;
    height: 26px;
    line-height: 26px;
    color: rgba(39,54,78,0.4);
    display: flex;
    .title {
      flex: 1;
    }
  }
  .by-name {
    .name {
      padding: 2px 0px;
      .el-input__inner {
        border: none;
        border-bottom: 1px solid #ccc;
      }
    }
  }

  ul.tag-list {
    li {
      height: 32px;
      line-height: 32px;
      padding-left: 14px;
      padding-right: 12px;
      display: flex;
      cursor: pointer;
      &:hover {
        background-color: rgba(255, 163, 0, 0.08);
      }
      &.checked {
        background-color: rgba(255, 163, 0, 1);
        color: #fff;
      }
    }
  }
}

</style>
