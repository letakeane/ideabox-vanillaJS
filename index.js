const ideaTitle = document.getElementById('idea-title');
const ideaBody = document.getElementById('idea-body');
const submit = document.getElementById('submit');
const ideaArea = document.getElementById('idea-box');
const ideaDeleteButton = document.getElementById('delete-idea');

if (ideaTitle.value !== undefined && ideaBody.value !== undefined) {
  submit.disabled = false;
}

const createIdeaTitle = (ideaNode) => {
  const titleNode = document.createElement('H2');
  const titleText = document.createTextNode(ideaTitle.value);
  const titleAttClass = document.createAttribute('class');

  titleAttClass.value = 'idea-title';
  titleNode.setAttributeNode(titleAttClass);
  titleNode.contentEditable = true;
  titleNode.appendChild(titleText);
  ideaNode.appendChild(titleNode);
}

const createIdeaBody = (ideaNode) => {
  const bodyNode = document.createElement('p');
  const bodyText = document.createTextNode(ideaBody.value);
  const bodyAtt = document.createAttribute('class');

  bodyAtt.value = 'idea-body';
  bodyNode.setAttributeNode(bodyAtt);
  bodyNode.contentEditable = true;
  bodyNode.appendChild(bodyText);
  ideaNode.appendChild(bodyNode);
}

const deleteIdea = (idea) => {
  idea.remove();
}

const createIdeaDeleteButton = (ideaNode) => {
  const ideaDelete = document.createElement('button');
  const ideaDeleteAtt = document.createAttribute('id');
  const ideaDeleteText = document.createTextNode('Delete');

  ideaDeleteAtt.value = 'delete-idea';
  ideaDelete.setAttributeNode(ideaDeleteAtt);
  ideaDelete.appendChild(ideaDeleteText);
  ideaNode.appendChild(ideaDelete);

  ideaDelete.addEventListener('click', () => {
    deleteIdea(ideaDelete.parentElement)
  })
}

const clearInputs = () => {
  ideaTitle.value = '';
  ideaBody.value = '';
}

submit.addEventListener('click', () => {
  const ideaNode = document.createElement('DIV');
  const ideaNodeAtt = document.createAttribute('id');

  ideaNodeAtt.value = 'idea';
  ideaNode.setAttributeNode(ideaNodeAtt);

  createIdeaTitle(ideaNode);
  createIdeaBody(ideaNode);
  createIdeaDeleteButton(ideaNode);

  ideaArea.appendChild(ideaNode);

  clearInputs();
})
