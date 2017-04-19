
var postsData = [
 {
   title: 'Introducing Telescope',
   url: 'http://sachagreif.com/introducing-telescope/',
   opisanie:'111',
   id:'opis1'
 }, 
 {
   title: 'Meteor',
   url: 'http://meteor.com',
   opisanie:'222',
   id:'opis2'
 }, 
 {
   title: 'The Meteor Book',
   url: 'http://themeteorbook.com',
   opisanie:'666',
   id:'opis3'
 },
 {
   title: 'YANDEX',
   url: 'http://yandex.ru',
   opisanie:'333',
   id:'opis4'
 },
 {
   title: 'Google',
   url: 'http://google.com',
   opisanie:'444',
   id:'opis5'
 }
];
Template.postsList.helpers({
 posts: postsData
});