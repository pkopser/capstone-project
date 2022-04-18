import axios from "axios"

export class PackageRepository{

    getCategories() {
        return new Promise((resolve, reject) => {
            axios.get('./categories.json')
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        });
    }

    getPackages() {

        return new Promise((resolve, reject) => {
            axios.get('./data.json')
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        });
    }



}
