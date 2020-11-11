/*
 *
 * Copyright 2020 Edazpotato
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation 
 * files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, 
 * modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software 
 * is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES 
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
 * IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */
import React, { useState, useEffect } from 'react';
import classnames from "classnames";

function useLoaded({ src, srcSet }) {
	const [loaded, setLoaded] = React.useState(false);

	React.useEffect(() => {
		if (!src && !srcSet) {
			return undefined;
		}

		setLoaded(false);

		let active = true;
		const image = new Image();
		image.src = src;
		if (srcSet) {
			image.srcset = srcSet;
		}
		image.onload = () => {
			if (!active) {
				return;
			}
			setLoaded('loaded');
		};
		image.onerror = () => {
			if (!active) {
				return;
			}
			setLoaded('error');
		};

		return () => {
			active = false;
		};
	}, [src, srcSet]);

	return loaded;
}

export default function Avatar(props) {
	// This is a rounded image
	/*
	 * Props
	 * Src: url to image to display
	 * Name: the first letter of this is shown if the src image can't be found. Also used as alt text
	 * Size: 'small', 'normal' or 'large'
	 * 
	 */

	 const {
		src,
		srcSet,
		alt,
		size,
		sizes
	} = props;

	let kid = null;

	const loaded = useLoaded({ src, srcSet });
	const hasImg = src || srcSet;
	const hasImgNotFailing = hasImg && loaded !== 'error';

	if (hasImgNotFailing) {
		kid = (
			<img
				alt={alt}
				src={src}
				srcSet={srcSet}
				sizes={sizes}
			/>
		)
	} else if (!hasImg && alt) {
		const letter = alt.charAt(0).toUpperCase();
		kid = <span>{letter}</span>
	} else {
		const imgData = "data:image/jpeg;base64,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";
		kid = <img src={imgData} />
	}

	const classes = classnames(
		"rounded-full",
		"border-2",
		"bg-gray-300",
		"border-gray-300",
		"dark:bg-gray-700",
		"dark:border-gray-700"
	);

	return (
		<figure className={classes}>
			{kid}
		</figure>
	)
}
