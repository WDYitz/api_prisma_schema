import style from './loading.module.css'

type LoadingType = {
  loading: boolean;
}

export const Loading = ({ loading }: LoadingType) => {
  return (
    <>
      {loading ?
        <div className={style.custom_loader}></div>
        : null}
    </>

  )
}