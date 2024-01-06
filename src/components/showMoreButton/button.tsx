type ShowMoreButtonType = {
    showMore: boolean;
    handleLoadMore: () => void
}

export const ShowMoreButton = ({ showMore, handleLoadMore }: ShowMoreButtonType) => {
    return (
        <>
            {showMore ?
                <button onClick={handleLoadMore} className='w-32 bg-indigo-500 rounded-lg p-2'>Load More...</button>
                : null}
        </>
    )
}