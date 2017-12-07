(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') { //If no current user set, string empty
            $uibModal.open({  //modal pop up
                templateUrl: '/templates/username.html', //modal-template link
                controller: 'UserNameCtrl as username'//controller-template link
            })
        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
