//populate project list?
console.log('hello world');

class Project {
  constructor(image, imageHover, title, description){
    this.image = image;
    this.imageHover = imageHover;
    this.title = title;
    this.description = description;
  }
  push(){
    proj.push(this)
  }

}
const proj = [];

const createProjectList = function createProjectList() {
  const proj1 = new Project(
    'pawns.png',
    'pawnsHover.png',
    'Game of Pawns',
    'Beginner\'s Chess - A variation of chess where the only pieces are pawns. Created from scratch.'
  )
  proj1.push();
}
createProjectList();

module.exports = proj;
