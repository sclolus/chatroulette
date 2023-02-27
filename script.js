const find_start_button = () => {
    return Array.from(document.querySelectorAll("button").entries()).filter(([index, element]) => {
	console.log(`${element}`)

	const found = element.className.search("Button_primary") >= 0
	
	return found
    })[0][1]
}


const find_accept_button = () => {
    return Array.from(document.querySelectorAll("button").entries()).filter(([index, element]) => {
	const found = element.className.search("select") >= 0
	
	return found
   })[0][1]
}

var auto_start = true

let select_match = () =>  { try { find_accept_button().click() } catch (e) {} }
// () =>  { try { document.getElementById("select-button").click() } catch (e) {} }

let start_match = () =>  { try { if (auto_start) { find_start_button().click() } } catch (e) {} }
// () =>  { try { if (auto_start) { document.getElementById("start-button").click() } } catch (e) {} }

setInterval(select_match, 500)
setInterval(start_match, 500)
