import axios from 'axios'

class ToDoListService {

    retrieveAllList() {
    	return axios.get('http://localhost:8080/todo/getList');
    }


    deleteListById(id) {
    console.log(id)
    let deleteUrl="http://localhost:8080/todo/deleteById/"+id;
    return axios.delete(deleteUrl);
	}

	retrieveListById(id) {
		console.log(id)
    let getUrl="http://localhost:8080/todo/getListById/"+id;
    return axios.get(getUrl);
	}

	updateListById(id, course) {
		let putUrl="http://localhost:8080/todo/updateList/"+id;
      return axios.post(putUrl, course);
  	}

  	createNewList(course) {
  		let createUrl="http://localhost:8080/todo/createList";
      return axios.post(createUrl, course);
  	}

}

export default new ToDoListService()

