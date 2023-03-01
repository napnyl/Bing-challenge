import Result from "./Result.js"

const ResultPage = ({ searchResults }) => {

    const results = searchResults.map(result => <Result key={result.id} result={result} />)
    const content = results?.length ? results : <article><p>Make a search!</p></article>

    return (
        <main>{content}</main>
    )
}
export default ResultPage