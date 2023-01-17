import s from "../../styles/background.module.scss";

export const Background = () => {

    return (
        <>
            <div className={s.description}></div>
            <div className={s.solar__syst}>
                <div className={s.sun}></div>
                <div className={s.mercury}></div>
                <div className={s.venus}></div>
                <div className={s.earth}></div>
                <div className={s.mars}></div>
                <div className={s.jupiter}></div>
                <div className={s.saturn}></div>
                <div className={s.uranus}></div>
                <div className={s.neptune}></div>
                <div className={s.pluto}></div>
                <div className={s.asteroids__belt}></div>
            </div>
        </>
    )
}

