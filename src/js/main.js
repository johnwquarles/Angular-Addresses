//can also set this up by chaining:
// angular
//   .module()..
//   .controller()...
//  etc.

var app = angular.module('angularAddresses', []);

app.controller('Main', function(){
  //var vm = this;
  var vm = this;

  vm.people = [
    {name: 'Ben', twitter: '@ben123', phone:"+1 432 456 7890", photo: "http://i.imgur.com/NPD7Yx0.jpg"},
    {name: 'Dan', twitter: '@dandan', phone:"(123) 456-7890", photo: "http://i.imgur.com/NPD7Yx0.jpg"},
    {name: 'Elsa', twitter: '@letitgo', phone:"999-456-7890", photo: "http://i.imgur.com/NPD7Yx0.jpg"},
    {name: 'Amanda', twitter: '@princessamanda', phone:"1 584 456 7890", photo: "http://i.imgur.com/NPD7Yx0.jpg"},
    {name: 'Charity', twitter:'@nonprofit', phone:"999.456.7890", photo: "http://i.imgur.com/NPD7Yx0.jpg"}
  ];

  vm.newPerson = {};

  vm.addNewAddress = function() {
    vm.people.push(vm.newPerson);
// vm.newPerson is a reference that is bound to the object that is pushed; you can still edit its attributes even after
// it's pushed into the table.
// Resolve this with the below line; it changes the reference represented by vm.newPerson to a blank object (this also clears the form).
    vm.newPerson = {};
    $('#modal').modal('hide');
  };

  vm.removeAddress = function(person) {
  	var index = vm.people.indexOf(person);
  	vm.people.splice(index, 1);
  };

});
