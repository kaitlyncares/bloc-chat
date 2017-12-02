(function(){
  function ModalCtrl($uibModalInstance, Room){
    this.ok = function () {
      Room.add(this.roomName);
      $uibModalInstance.close();
    };
    this.cancel = function(){
      $uibModalInstance.dismiss('cancel');
    };
  }


  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
})();
