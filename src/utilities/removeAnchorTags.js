const removeAnchorTags = text => {
	// Regular expression to match anchor tags
	const anchorTagRegex = /<a\b[^>]*>(.*?)<\/a>/g;

	// Remove anchor tags from the text
	const cleanedText = text.replace(anchorTagRegex, "");

	return cleanedText;
};

export default removeAnchorTags;
