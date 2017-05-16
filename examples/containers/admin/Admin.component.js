import { connect } from 'vuex-observable'
import { checkAdminAccess } from './Admin.module'
import store from '../../store'

const Admin = {
  created() {
    this.checkAdminAccess()
  }
}

export default connect((globalState) => globalState.admin, {
  checkAdminAccess
})(Admin, store)
