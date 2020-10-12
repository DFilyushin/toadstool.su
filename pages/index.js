import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {getSortedPostsData} from '../lib/posts'
import Link from 'next/link'
import {getAge} from '../components/date'


export default function Home({allPostsData}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <section id="about" className="about">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Общее</h2>
                        <p>Более 15 лет проектирования и разработки приложений.</p><p> Разработка технических требований
                        проектов.
                        Разработка настольных корпоративных приложений.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <img src="images/me.jpg" className="img-fluid rounded" alt="Фото разработчика"/>
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content">
                            <h3>Fullstack разработчик</h3>
                            <p className="font-italic">
                                Веб-разработка, преимущественно бэкэнд. Настольные приложения.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="icofont-rounded-right"></i> <strong>Дата рождения:</strong> 13
                                            Июня
                                            1983
                                        </li>
                                        <li><i className="icofont-rounded-right"></i>
                                            <strong>Сайт:</strong> <Link href={`https://toadstool.su/`}>
                                                <a>{"toadstool.su"}</a>
                                            </Link>
                                        </li>
                                        <li><i className="icofont-rounded-right"></i> <strong>Тел.:</strong> <a
                                            href="callto://+79139342091">+7 913 934 2091</a></li>
                                        <li><i className="icofont-rounded-right"></i> <strong>Skype:</strong> <a
                                            href="skype:dfilushin?call">dfilushin</a></li>
                                        <li><i className="icofont-rounded-right"></i>
                                            <strong>Город:</strong> Новосибирск, РФ
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="icofont-rounded-right"></i>
                                            <strong>Возраст:</strong> {getAge()}</li>
                                        <li><i className="icofont-rounded-right"></i>
                                            <strong>Уровень:</strong> Специалист
                                        </li>
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
                                Интересна работа в качестве бэкэнд разработчика на Python в небольшой команде стартапа.
                                Интересен в изучении и использовании Go, Kubernates, C#.
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
                            <img src="images/delphi.png" className={"inline"} title="Embarcadero Delphi"
                                 alt="Embarcadero Delphi"/>
                            <img src="images/react.png" className={"inline"} title="React" alt="React"/>
                            <img src="images/python.png" className={"inline"} title="Python" alt="Python"/>
                            <img src="images/django.png" className={"inline"} title="Django framework"
                                 alt="Django framework"/>
                            <img src="images/flask.png" className={"inline"} title="Flask framework"
                                 alt="Flask framework"/>
                            <img src="images/ts.png" className={"inline"} title="TypeScript" alt="TypeScript"/>
                        </div>

                        <div className="col-lg-6 text-center">
                            <img src="images/firebird.png" className={"inline text-center"} title="Firebird database"
                                 alt="Firebird database"/>
                            <img src="images/mongodb.png" className={"inline text-center"} title="MongoDb database"
                                 alt="MongoDb database"/>
                            <img src="images/docker.png" className={"inline text-center"} title="Docker" alt="Docker"/>
                            <img src="images/postgresql.png" className={"inline text-center"} title="Postgresql"
                                 alt="Postgresql"/>
                            <img src="images/ubuntu.png" className={"inline text-center"} title="Ubuntu Linux"
                                 alt="Ubuntu Linux"/>
                        </div>

                    </div>

                </div>
            </section>

            <section id="resume" className="resume">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Резюме</h2>
                        <p>Самостоятелен в принятии решений. Веду проект от постановки задачи до внедрения и
                            дальнейшего сопровождения. Пользователей люблю и уважаю потому что делаю приложения для
                            людей.
                            Считаю себя коммуникабельным, открытым, упорным в поиске решения задачи, но не
                            настолько, чтобы имея очевидное решение искать элегантный алгоритм в одну строчку.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="resume-title">Общие сведения</h3>
                            <div className="resume-item pb-0">
                                <h4>Дмитрий Филюшин</h4>
                                <p><em>Разрабатываю приложения для Windows в среде Delphi. Python.
                                    Использую СУБД Firebird, postgresql, mongodb, mysql. Разрабатываю прикладное ПО для
                                    анализа данных Oracle, MS SQL, Postgresql.
                                    В повседневной работе использую системы управления версиями git (SmartGit, CLI),
                                    jira.
                                    Сопровождаю сервера на Linux, FreeBSD (iptables, systemd, zabbix).
                                    Деплой на сервера VPS Linux с использованием docker.
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
                                    <li>Учёт коммунальных платежей Рубин</li>
                                    <li>Медицинская информационная система КардиоКарта (настольное и веб-приложение)
                                    </li>
                                    <li>Система электронного документооборота Докумед</li>
                                    <li>Электронные расчётные листки</li>
                                    <li>Централизованная бактериологическая лаборатория Bacillus</li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>Эксперт</h4>
                                <h5>2019 - Настоящее время</h5>
                                <p><em>ГБУ НСО Центр Информационных Технологий Новосибирской Области, НСК, РФ </em></p>
                                <ul>
                                    <li>Эксплуатация резервного центра обработки данных</li>
                                    <li>Техническая поддержка систем мониторинга, диспетчеризации и контроля состояния
                                        ЦОДа
                                    </li>
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

                    <div className="row row-cols-1 row-cols-md-3">
                        {allPostsData.map(({id, date, title, image}) => (
                            <div className="col mb-4" key={id}>
                                <div className="card">
                                    <img src={`images/${image}`} />
                                    <div className="card-body">
                                        <h5 className="card-title"></h5>
                                        <Link href={`/projects/${id}`}>
                                            <a>{title}</a>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        ))}

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
