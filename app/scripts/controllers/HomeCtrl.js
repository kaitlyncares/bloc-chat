(function() {
    function HomeCtrl($uibModal, Room, Message, $cookies) {
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

      this.sendMessage = function(){
        this.newMessage.roomId = this.roomList.$id;
        this.newMessage.username = this.currentUser;
        Message.send(this.newMessage);
      };


    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', 'Room', 'Message', '$cookies',  HomeCtrl]);
})();
