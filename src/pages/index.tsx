import Head from "next/head";
import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";
import Introduction from "@/components/Content/Introduction/Introduction";
import About from "@/components/Content/About/About";
import Experience from "@/components/Content/Experience/Experience";
import Projects from "@/components/Content/Projects/Projects";
import Scrollbar from "@/components/Content/Scrollbar/Scrollbar";

export default function Home() {
	return (
		<>
			<Head>
				<title>John Wang Portfolio</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta name="author" content="John Wang" />
				<meta
					name="description"
					content="I'm a web developer and full stack enginneer based in the Bay Area."
				/>
				<meta
					name="keywords"
					content="John Wang, UCI, software engineer, web developer, full stack, react, node, typescript, javascript"
				/>
				<meta property="og:title" content="John Wang Portfolio" />
				<meta
					property="og:description"
					content="I'm a web developer and full stack enginneer based in the Bay Area."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="johnwang.vercel.app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Scrollbar />
			<Header />
			<main>
				<Introduction />
				<About />
				<Experience />
				<Projects />
			</main>
			<Footer />
		</>
	);
}
