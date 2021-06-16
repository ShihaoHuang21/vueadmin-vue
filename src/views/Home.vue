<template>
  <el-container>
    <el-aside width="200px"><SideMenu /> </el-aside>
    <el-container>
      <el-header>
        <strong>VueAdmin后台管理系统</strong>
        <div class="header-avatar">
          <el-avatar :src="userInfo.avatar"></el-avatar>
          <el-dropdown>
            <span class="el-dropdown-link">
              {{ userInfo.username }}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <router-link :to="{ name: 'UserCenter' }">
                <el-dropdown-item> 个人中心</el-dropdown-item>
              </router-link>
              <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-link
            href="https://space.bilibili.com/278032298"
            :underline="false"
            type="primary"
            >B站</el-link
          >
          <el-link :underline="false" type="primary">Github</el-link>
        </div>
      </el-header>
      <el-main>
        <Tabs />
        <div style="margin: 0 15px">
          <router-view />
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SideMenu from './inc/SideMenu'
import Tabs from './inc/Tabs'
export default {
  name: 'Home',
  components: { SideMenu, Tabs },
  directives: {},
  data () {
    return {
      userInfo: {
        id: '',
        username: '',
        avatar: 'https://gitee.com/ShihaoHuang310/images/raw/master/wslj.png'

      }
    }
  },
  created () {

  },
  mounted () {
    this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      this.$axios.get('/sys/userInfo').then(res => {
        this.userInfo = res.data.data
      })
    },
    logout () {
      this.$axios.post('/logout').then(res => {
        localStorage.clear()
        sessionStorage.clear()
        this.$store.commit('resetState')
        this.$router.push('/login')
      })
    }
  },
};
</script>

<style  scoped>
.el-link {
  color: aliceblue;
}
.el-menu-vertical-demo {
  height: 100%;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.header-avatar {
  float: right;
  width: 210px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: aliceblue;
}
.el-dropdown-link {
  cursor: pointer;
  color: aliceblue;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-container {
  padding: 0;
  margin: 0;
  height: 100%;
}
.el-header {
  background-color: #17b3a3;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;

  line-height: 200px;
}

.el-main {
  color: #333;
  /* text-align: center; */
  /* line-height: 160px; */
  padding: 0px;
}
a {
  text-decoration: none;
}
</style>
