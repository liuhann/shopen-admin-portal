<template>
  <div class="left-menu-group">
    <h3 class="group-title">
      <span class="title" v-if="config.title">{{config.title}}</span>
      <div class="actions">
        <slot name="title-append">
        </slot>
      </div>
    </h3>
    <ul class="nav-list" v-if="config.menus && config.menus.length">
      <slot name="list-prepend"></slot>
      <li v-for="(sub, index) in config.menus" :key="index" >
        <div class="info">
          <span class="filter-label">{{sub.name}}</span>
        </div>
      </li>
      <slot name="list-append"></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'left-menu-group',
  props: {
    config: {
      type: Object
    }
  },
  components: {
  }
}
</script>

<style lang="less">
.left-menu-group {
  .group-title {
    padding-left: 14px;
    padding-right: 12px;
    height: 26px;
    line-height: 26px;
    color: rgba(39,54,78,0.8);
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
