import template from './signOut.html';
import './signOut.styl';

const userSignOutComponent = {
    template,
    bindings: {

    },
    controller: /* @ngInject */ 
    class UserSignUpController {
        static get $inject() {
            return ['$log', '$timeout', '$scope', 'UserApi','UserApiLocal', '$state', '$stateParams'];
        }
        constructor($log, $timeout, $scope, UserApi, UserApiLocal, $state, $stateParams) {
            this.$log = $log;
            this.$timeout = $timeout;
            this.$scope = $scope;
            this.UserApi = UserApiLocal;
            this.UserApiLocal = UserApiLocal;
            this.$state = $state;
            this.$stateParams = $stateParams;
        }
        $onInit() {
            this.userData = this.getUserData();
            this.email = this.$stateParams.email;
        }
        
        getUserData() {
            return {
                email: "",
                password: "",
                passwordConfirm: "",
                primaryAffil: ""
            }
        }
        signOut() {
            console.log('signing out');
            this.UserApi.signout(this.userData).then((res)=>{
                console.log(res);
                if (res.status == 200) {
                    // this.$state.go('tooooo', {email: res.data.email}); // $stateParams
                    console.log('sign out succed!')
                    this.$state.go('app', {email: ''});
                    
                } else {
                    console.log('keeptrying');
                }
            });
        }
    }
    
};
export default userSignOutComponent;
