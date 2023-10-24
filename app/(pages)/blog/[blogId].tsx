import { ReactElement } from "react"
import { useRouter } from "next/router"
import { Swiper, SwiperSlide } from "swiper/react";


// Styles
import styles from "./Blog.module.scss"
import { cs } from "utils/helpers"
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Components
import { HeadSeo } from "components"
import AppLayout from "components/layout/AppLayout"
import { Tags, CommentCard, MediaPreview, Breadcrumb, CommentForm, BlogCard } from "components/organims"
import { Divider, Paragraph, Text } from "components/atoms"

// Icons
import { TfiTwitter } from "react-icons/tfi"
import { RxInstagramLogo } from "react-icons/rx"
import { ImWhatsapp } from "react-icons/im"
import { VscCommentDiscussion } from "react-icons/vsc"

function BlogDetail() {

    // ------- Constants ------- //
    const breadcrumbItems = [
        { label: "لک لک", href: "/" },
        { label: "دسته بندی وبلاگ", href: "/blog" },
        { label: "جزییات وبلاگ", href: "/blog" }
    ]

    // ------- Constants ------- //
    const router = useRouter()
    const blogId = router.query.blogId

    return (
        <>
            <HeadSeo
                title="blog"
            />

            <div className={cs(styles.breadcrumbContainer)}>
                <Breadcrumb items={breadcrumbItems} />
            </div>

            <div className={cs(styles.blogDetailContent)}>

                <div className={cs(styles.mediaAndDetail)}>
                    <Text size={22}>نام مقاله</Text>
                    <MediaPreview
                        src="https://picsum.photos/1250/450.jpg"
                        title="نام ویدیو"
                        onPlay={() => { }}
                    />
                    <div className={cs(styles.authorAndshare)}>
                        <div className="flex items-center gap-4">
                            <Text>نوشته شده توسط</Text>
                            <Text size={10}>علیرضا حسینی</Text>
                        </div>
                        <div className={cs(styles.social)}>
                            <Text>اشتراک گذاری</Text>
                            <TfiTwitter size={24} />
                            <RxInstagramLogo size={24} />
                            <ImWhatsapp size={22} />
                        </div>


                    </div>
                </div>

                <div className={cs(styles.body)}>
                    <Paragraph size={13} className="leading-loose">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </Paragraph>
                    <Paragraph size={13} className="leading-loose mt-10">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.

                    </Paragraph>
                    <Paragraph size={13} className="leading-loose mt-10">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </Paragraph>
                    <Paragraph size={13} className="leading-loose mt-10">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </Paragraph>
                </div>

                <div className="flex justify-center">
                    <Tags
                        items={[
                            { title: "لک لک", href: "/" },
                            { title: "لک لک", href: "/" },
                            { title: "لک لک", href: "/" },
                            { title: "لک لک", href: "/" },
                            { title: "لک لک", href: "/" },
                            { title: "لک لک", href: "/" }
                        ]}
                    />
                </div>

                <div className={cs(styles.commentsContainer)}>
                    <div className={cs(styles.title)}>
                        <VscCommentDiscussion />
                        <Text>نظرات</Text>
                    </div>
                    <Divider />

                    <div className={cs(styles.comments)}>
                        <CommentCard />
                        <CommentCard reply />
                        <CommentCard />
                        <CommentCard />
                    </div>
                </div>

                <div className={cs(styles.formContainer)}>
                    <CommentForm />
                </div>
            </div>

            <section className={cs(styles.blogs)}>
                <div className={cs(styles.title)}>
                    <VscCommentDiscussion />
                    <Text>مقالات مشابه</Text>
                </div>
                <Divider />
                <div className={cs(styles.slider)}>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        freeMode={true}
                        grabCursor={true}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <BlogCard
                                title="نام وبلاگ"
                                time="12:20"
                                description="لورم ایپسوم متن ساختگی با تولید ساختگی لورم ایپسوم متن ساختگی با تولید ساختگی"
                                href={`/blog/1`}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogCard
                                title="نام وبلاگ"
                                time="12:20"
                                description="لورم ایپسوم متن ساختگی با تولید ساختگی لورم ایپسوم متن ساختگی با تولید ساختگی"
                                href={`/blog/1`}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogCard
                                title="نام وبلاگ"
                                time="12:20"
                                description="لورم ایپسوم متن ساختگی با تولید ساختگی لورم ایپسوم متن ساختگی با تولید ساختگی"
                                href={`/blog/1`}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogCard
                                title="نام وبلاگ"
                                time="12:20"
                                description="لورم ایپسوم متن ساختگی با تولید ساختگی لورم ایپسوم متن ساختگی با تولید ساختگی"
                                href={`/blog/1`}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogCard
                                title="نام وبلاگ"
                                time="12:20"
                                description="لورم ایپسوم متن ساختگی با تولید ساختگی لورم ایپسوم متن ساختگی با تولید ساختگی"
                                href={`/blog/1`}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogCard
                                title="نام وبلاگ"
                                time="12:20"
                                description="لورم ایپسوم متن ساختگی با تولید ساختگی لورم ایپسوم متن ساختگی با تولید ساختگی"
                                href={`/blog/1`}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

BlogDetail.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout>{page}</AppLayout>
}

export default BlogDetail