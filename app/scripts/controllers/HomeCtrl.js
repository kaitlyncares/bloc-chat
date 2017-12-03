(function() {
    function HomeCtrl($uibModal, Room, Message) {
      this.roomList = Room.all;
      this.createRoom = function(){
        $uibModal.open({

              animation: true,
              templateUrl: '/templates/modal.html',
              controller: 'ModalCtrl',
              controllerAs: 'ctrl'
        });

      };

      this.changeRoom = function(room){
          this.messages = Message.getByRoomId(room.$id);
      };


    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', 'Room', 'Message', HomeCtrl]);
})();
