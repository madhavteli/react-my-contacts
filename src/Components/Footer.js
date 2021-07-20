import classes from './Footer.module.css'

const currentYear = new Date().getFullYear();
function Footer() {
	return(
		<footer className={classes.footer}>
			<p className={classes.footerContent}>Copyrights ⓒ {currentYear}</p>
		</footer>
	)
}

export default Footer;