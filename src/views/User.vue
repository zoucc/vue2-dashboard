<template>
  <user-list :tableData="tableData"></user-list>
</template>
<script>
import UserList from '../components/user/UserList';
import { mapGetters } from 'vuex';

export default {
  components: {
    UserList,
  },
  computed: {
    ...mapGetters({
      tableData: 'getUserList'
    }),
  },
  mounted () {
     this.$store.dispatch('_getUser')
  },
}
</script>
