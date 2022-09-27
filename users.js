const validateUserData = (userData) => {

    if (userData.email === undefined || typeof(userData.email) !== "string") {
        return {
            isValid: false,
            message: "Email is required and it must be a string"
        }
    }


    if (userData.firstName === undefined || typeof(userData.firstName) !== "string") {
        return {
            isValid: false,
            message: "First name is required and it must be a string"
        }
    }

    if (userData.lastName === undefined || typeof(userData.lastName) !== "string") {
        return {
            isValid: false,
            message: "Last name is required and it must be a string"
        }
    }

    if (userData.age !== undefined && typeof(userData.age) !== "number") {

        return {
            isValid: false,
            message: "Age must be a number"
        }
    }
    if (userData.favoriteFoods === undefined || !Array.isArray(userData.favoriteFoods) || userData.favoriteFoods.length === 0) {

        return {
            isValid: false,
            message: "favorite foods must be an array and must have length"
        }
    }

    const nonStringFoods = userData.favoriteFoods.filter((favoriteFood)=>{

        if (typeof(favoriteFood) !== 'string') {

            return true
             } else {
                return false
             }
            })

            console.log("nonStringFoods ", nonStringFoods);

            if (nonStringFoods.length > 0) {

                return {
                    isValid: false,
                    message: "favorite foods must be an array of strings"
                }
            }
            return {
                isValid: true
            }
        }

        module.exports = {

         validateUserData,
        };








