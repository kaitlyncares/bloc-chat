(function() {
    function HomeCtrl($uibModal, Room) {
      this.roomList = Room.all;
      this.createRoom = function(){
        $uibModal.open({

              animation: true,
              templateUrl: '/templates/modal.html',
              controller: 'ModalCtrl',
              controllerAs: 'ctrl'
        });

      };
  
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', 'Room', HomeCtrl]);
})();
