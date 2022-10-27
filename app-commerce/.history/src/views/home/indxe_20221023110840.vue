<template>
  <el-container class="home_container">
    <!-- 头部 -->
    <el-header>
      <div>
        <img src="../../assets/t.jpg" alt="">
        <span>后台管理系统</span>
      </div>
      <el-button type="info" round @click="loginOut">退出</el-button>
    </el-header>
    <!-- 主体 -->
    <el-container>

      <!-- 侧边 -->
      <el-aside width="200px">
        <el-menu background-color="#313743" text-color="#fff" active-text-color="#ffd04b">
          <!-- 一级菜单 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index="1-4-1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
            </el-menu-item>
        </el-menu>
      </el-aside>

      <!-- 右边主体 -->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>

export default {
  name: 'appHome',
  data() {
    return {}
  },
  methods: {
    // 退出
    loginOut() {
      this.$store.commit('setUser', '')
      this.$router.push('/login')
    }
  }

}

</script>

<style  scoped lang="less">
.home_container {
  height: 100vh;
}

.el-header {
  background-color: #363d40;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 20px;
  padding: 0 10px;

  >div {
    display: flex;
    align-items: center;
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  span {
    margin-left: 15px;
  }
}

.el-aside {
  background-color: #313743;
}

.el-main {
  background-color: #e9edf1;
}
</style>
