import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
	build: {
		jsLibs: `${buildFolder}/js/libs/`,
		fonts: `${buildFolder}/fonts/`,
		images: `${buildFolder}/img/`,
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		files: `${buildFolder}/files/`,
	},
	src: {
		jsLibs: `${srcFolder}/js/libs/*.js`,
		fonts: `${srcFolder}/fonts/*.{ttf,otf,svg,eot,woff,woff2}`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,webp,gif,png,ico}`,
		svg: `${srcFolder}/img/**/*.svg`,
		js: `${srcFolder}/js/**/*.js`,
		scss: `${srcFolder}/scss/*.scss`,
		html: `${srcFolder}/*.html`,
		files: `${srcFolder}/files/**/*.*`,
	},
	watch: {
		fonts: `${srcFolder}/fonts/*.{ttf,otf,svg,eot,woff,woff2}`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,webp,gif,png,ico,svg,SVG}`,
		js: `${srcFolder}/js/**/*.js`,
		scss: `${srcFolder}/scss/**/*.scss`,
		html: `${srcFolder}/**/*.html`,
		files: `${srcFolder}/files/**/*.*`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``
}