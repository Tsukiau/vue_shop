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
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggle_btn" @click="toggleBtn">|||</div>
        <el-menu background-color="#313743"
          :collapse-transition="false"
          :collapse="isCollapse" text-color="#fff" router
          :default-active="isActivePath"
          active-text-color="#329cff"
          unique-opened>
          <!-- 一级菜单 -->
          <el-submenu :index="index + ''" v-for="(item, index) in menusList" :key="item.id">
            <template slot="title">
              <i :class="iconsObj[item.id]"></i>
              <span>{{item.authName}}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item :index="'/'+item.path" v-for="(item) in item.children" :key="item.id"
              @click="save('/'+item.path)">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{item.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <!-- 右边主体 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { menusApi } from '@/api/home'
import { mapState } from 'vuex'
export default {
  name: 'appHome',
  data() {
    return {
      menusList: [],
      iconsObj: {
        125: 'el-icon-user-solid',
        103: 'el-icon-platform-eleme',
        101: 'el-icon-s-goods',
        102: 'el-icon-s-order',
        145: 'el-icon-share'
      },
      isCollapse: false,
      isActivePath: '' // 保存链接激活状态
    }
  },
  created() {
    this.loadMenusApi()
    this.isActivePath = this.activePath
  },
  methods: {
    // 退出
    loginOut() {
      this.$store.commit('setUser', '')
      this.$router.push('/login')
    },
    // 所有菜单
    async loadMenusApi() {
      try {
        const { data } = await menusApi()
        console.log(data.data)
        this.menusList = data.data
      } catch (err) {
        console.log('获取失败', err)
        this.$message.error('获取菜单失败')
      }
    },
    // 点击按钮折叠
    toggleBtn() {
      this.isCollapse = !this.isCollapse
    },
    // 保存链接激活状态
    save(path) {
      this.$store.commit('setActive', path)
    }
  },

  computed: {
    ...mapState(['activePath'])
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
    width: 55px;
    height: 55px;
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

.el-menu {
  border-right: 0;
}

.toggle_btn {
  font-size: 17px;
  line-height: 20px;
  background-color: #475163;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
