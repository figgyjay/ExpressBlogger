
const validateBlogData = (blogData) => {

	if (blogData.title === undefined || typeof(blogData.title) !== "string" || blogData.title.length > 40) {
		// title is required and it must be a string
		return {
			isValid: false,
			message: "title is required and it must be a string and must be less than 40 characters"
		}
	} 
	
	if (blogData.text === undefined || typeof(blogData.text) !== "string") {
		// text is required and it must be a string
		return {
			isValid: false,
			message: "Text is required and it must be a string "
		}
	}
	
	if (blogData.author === undefined || typeof(blogData.author) !== "string" || blogData.author.length > 40) {
		// author is required and it must be a string
		return {
			isValid: false,
			message: "Author is required and it must be a string and must be less than 40 characters"
		}
	} 

	console.log("here ", blogData.category)

	if (
		blogData.category === undefined || 
		Array.isArray(blogData.category) === false ||
		blogData.category.length < 1
	) {
		return {
			isValid: false,
			message: "Category must exist, must be an array, and must have items within it"
		}
	}

	if (blogData.category.length > 10) {
		return {
			isValid: false,
			message: "Category cannot have more than 10 items"
		}
	}

	const nonStringsArray = blogData.category.filter((blogCategory)=>{
		if (typeof(blogCategory) !== 'string') {
			return true
		} else {
			return false
		}
	})

	if (nonStringsArray.length > 0) {
		return {
			isValid: false,
			message: "Category must only contain string values"
		}
	}

	const validCategories = [
		"Lorem",
		"ipsum",
		"dolor",
		"sit",
		"amet"	
	]

	let isArrayValid = true

	blogData.category.forEach((blogCategory)=>{
		if (validCategories.includes(blogCategory) === false) {
			isArrayValid = false;
		}
	})

	if (isArrayValid === false) {
		return {
			isValid: false,
			message: "Category values must be one of the following: Lorem, ipsum, dolor, sit, amet"
		}
	}
	
	return {
		isValid: true
	}
}

module.exports = {
	validateBlogData,
}