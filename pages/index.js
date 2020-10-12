import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {getSortedPostsData} from '../lib/posts'
import Link from 'next/link'


export default function Home({allPostsData}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <section id="about" className="about">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>About</h2>
                        <p>Более 15 лет проектирования и разработки приложений. Разработка технических требований проектов.
                            Разработка настольных корпоративных приложений.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <img src="images/me.jpg" className="img-fluid" alt=""/>
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content">
                            <h3>Fullstack разработчик</h3>
                            <p className="font-italic">
                                Веб-разработка, преимущественно бэкэнд.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="icofont-rounded-right"></i> <strong>Дата рождения:</strong> 13
                                            Июня
                                            1983
                                        </li>
                                        <li><i className="icofont-rounded-right"></i>
                                            <strong>Сайт:</strong> toadstool.su
                                        </li>
                                        <li><i className="icofont-rounded-right"></i> <strong>Тел.:</strong> +7 913 934
                                            2091
                                        </li>
                                        <li><i className="icofont-rounded-right"></i> <strong>Город:</strong> НСК, РФ
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="icofont-rounded-right"></i> <strong>Возраст:</strong> 30</li>
                                        <li><i className="icofont-rounded-right"></i> <strong>Уровень:</strong></li>
                                        <li><i className="icofont-rounded-right"></i>
                                            <strong>Email:</strong> dmitriy.filyushin@yandex.ru
                                        </li>
                                        <li><i className="icofont-rounded-right"></i>
                                            <strong>Проекты:</strong> Проектная работа, удалённая работа, фуллтайм в
                                            интересной команде
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p>
                                Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt
                                adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                                Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus
                                itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
                                culpa magni laudantium dolores.
                            </p>
                        </div>
                    </div>

                </div>
            </section>


            <section id="skills" className="skills section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Навыки</h2>
                        <p>С 2004 года занимаюсь разработкой настольных клиент-серверных приложений. С 2015 проектирую и
                            разрабатываю веб-приложения. Использую в своей работе следующий стек технологий:</p>
                    </div>

                    <div className="row skills-content">

                        <div className="col-lg-6 text-center">
                            <img src="images/delphi.png" className={"inline"} title="Embarcadero Delphi"/>
                            <img src="images/react.png" className={"inline"} title="React"/>
                            <img src="images/python.png" className={"inline"} title="Python"/>
                            <img src="images/django.png" className={"inline"} title="Django framework"/>
                            <img src="images/flask.png" className={"inline"} title="Flask framework"/>
                            <img src="images/ts.png" className={"inline"} title="TypeScript"/>
                        </div>

                        <div className="col-lg-6 text-center">
                            <img src="images/firebird.png" className={"inline text-center"} title="Firebird database"/>
                            <img src="images/mongodb.png" className={"inline text-center"} title="MongoDb database"/>
                            <img src="images/docker.png" className={"inline text-center"} title="Docker"/>
                            <img src="images/postgresql.png" className={"inline text-center"} title="Postgresql"/>
                            <img src="images/ubuntu.png" className={"inline text-center"} title="Ubuntu Linux"/>
                        </div>

                    </div>

                </div>
            </section>

            <section id="resume" className="resume">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Резюме</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
                            Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit
                            alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="resume-title">Общие сведения</h3>
                            <div className="resume-item pb-0">
                                <h4>Дмитрий Филюшин</h4>
                                <p><em>Самостоятелен в принятии решений. Веду проект от постановки задачи до запуска и
                                    дальнейшего сопровождения. Пользователей люблю и уважаю потому что делаю приложения
                                    для людей.
                                    Считаю себя коммуникабельным, открытым, упорным в поиске решения задачи, но не
                                    настолько, чтобы имея очевидное решение искать элегантный алгоритм в одну строчку.
                                </em></p>
                                <ul>
                                    <li>Россия, Новосибирск</li>
                                    <li>(913) 934-2091</li>
                                    <li>dmitriy.filyushin@yandex.ru</li>
                                </ul>
                            </div>

                            <h3 className="resume-title">Образование</h3>
                            <div className="resume-item">
                                <h4>Инженер-системотехник</h4>
                                <h5>2004 - 2006</h5>
                                <p><em>Инновационный Евразийский университет, Павлодар, РК</em></p>
                                <p>Информационные технологии, Компьютерные системы обработки информации и управления</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="resume-title">Опыт работы</h3>
                            <div className="resume-item">
                                <h4>Эксперт</h4>
                                <h5>2004 - Настоящее время</h5>
                                <p><em>Частная практика, фриланс</em></p>
                                <ul>
                                    <li>Разработка настольных приложений</li>
                                    <li>Сопровождение собственных приложений</li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>Эксперт</h4>
                                <h5>2019 - Настоящее время</h5>
                                <p><em>ГБУ НСО Центр Информационных Технологий Новосибирской Области, НСК, РФ </em></p>
                                <ul>
                                    <li>Эксплуатация резервного центра обработки данных</li>
                                    <li>Техническая поддержка систем мониторинга, диспетчеризации и контроля состояния ЦОДа</li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>Инженер-проектировщик</h4>
                                <h5>2018</h5>
                                <p><em>Центр финансовых технологий, НСК, РФ</em></p>
                                <ul>
                                    <li>Доработка существующего кода на PL+</li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>Старший программист</h4>
                                <h5>2018</h5>
                                <p><em>Павлодарский областной кардиологический центр, ПВЛ, РК</em></p>
                                <ul>
                                    <li>разработка и внедрение медицинской системы</li>
                                    <li>внедрение лабораторной системы для бактериологической лаборатории</li>
                                    <li>администрирование серверов баз данных: mysql, firebird, postgresql</li>
                                    <li>администрирование серверов linux</li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>Ведущий инженер разработчик</h4>
                                <h5>2005-2015</h5>
                                <p><em>Аксуский завод ферросплавов, АКС, РК</em></p>
                                <ul>
                                    <li>разработка внутрифирменного программного обеспечения: электронный табель,
                                        система учёта вагонов, учёт и отпуск тепловой энергии
                                    </li>
                                    <li>система контроля репликации данных комплекса Галактика</li>
                                    <li>администрирование ERP-системы Галактика (Pervasive, Oracle)</li>
                                    <li>обеспечение обмена данными между системами, миграция между СУБД</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="skills" className="skills section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Проекты</h2>
                        <p>Наиболее интересные и эмоциональные проекты</p>
                    </div>

                    <div className="row skills-content">
                        <ul className={utilStyles.list}>
                            {allPostsData.map(({id, date, title}) => (
                                <li key={id}>
                                    <i className="icofont-rounded-right"></i>
                                    <Link href={`/projects/${id}`}>
                                        <a>{title}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

        </Layout>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}
