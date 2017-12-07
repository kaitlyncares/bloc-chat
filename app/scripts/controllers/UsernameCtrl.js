(function () {
    function UserNameCtrl($uibModalInstance, $cookies) {
        this.setUsername = function() {
            $cookies.put('blocChatCurrentUser', this.username)
            $uibModalInstance.close();
        };
    }

    angular
        .module('blocChat')
        .controller('UserNameCtrl', ['$uibModalInstance', '$cookies', UserNameCtrl]);
})();
