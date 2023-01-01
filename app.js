const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

const unsecuredCopyToClipboard = (text) => { 
	const textArea = document.createElement("textarea"); 
	textArea.value=text; 
	document.body.appendChild(textArea); 
	textArea.focus();
	textArea.select(); 
	try{
		document.execCommand('copy')
	}catch(err){
		console.error('Unable to copy to clipboard',err)
	}document.body.removeChild(textArea)};

async function copyText(e) {
//prevent button going to the site
	e.preventDefault()
	const link = this.getAttribute('link')
	console.log(link)
	try {
		if (window.isSecureContext && navigator.clipboard) {
            await navigator.clipboard.writeText(link)
		    alert("Copied the text: " + link)
        } 
        else {
            unsecuredCopyToClipboard(link)
            alert("Copied the text: " + link)
        }
	} catch (err) {
		console.error(err)
	}
}

shareButtons.forEach(shareButton => shareButton.addEventListener('click', copyText))