(function () {
    function UserNameCtrl($uibModalInstance, $cookies) {
        this.setUsername = function() {
            $uibModalInstance.close();
        };
    }

    angular
        .module('blocChat')
        .controller('UserNameCtrl', ['$uibModalInstance', '$cookies', UserNameCtrl]);
})();
