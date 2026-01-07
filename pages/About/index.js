import React, { useEffect } from 'react';
import Head from 'next/head';
import MainHeadercopy from "../main-header";
import {
  Users,
  Award,
  Clock,
  MapPin,
  Sparkles,
  TrendingUp,
  Heart
} from 'lucide-react';
function AboutPage() {
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.init({
        duration: 800,
        once: true,
        offset: 100,
      });
    });
  }, []);
  return (
    <>
      <Head>
        <title>درباره ما | شیک پوشان</title>
        <meta name="description" content="شیک پوشان با دوازده سال سابقه در فروش شیک ترین پوشاک آقایان و بانوان در ایران" />
      </Head>
      <MainHeadercopy />
      <section className="mission-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <p className="section-subtitle">
              ارائه بهترین تجربه خرید پوشاک با کیفیت و طراحی بی‌نظیر
            </p>
          </div>
          <div className="mission-cards">
            <div className="mission-card" data-aos="fade-up" data-aos-delay="200">
              <div className="card-icon">
                <Sparkles />
              </div>
              <h3 className="card-title">کیفیت بی‌نظیر</h3>
              <p className="card-text">
                انتخاب بهترین مواد اولیه و توجه به جزئیات در تولید هر قطعه از پوشاک
              </p>
            </div>
            <div className="mission-card" data-aos="fade-up" data-aos-delay="400">
              <div className="card-icon">
                <Heart />
              </div>
              <h3 className="card-title">رضایت مشتری</h3>
              <p className="card-text">
                اولویت اصلی ما رضایت کامل شما از خرید و استفاده از محصولاتمان است
              </p>
            </div>
            <div className="mission-card" data-aos="fade-up" data-aos-delay="600">
              <div className="card-icon">
                <TrendingUp />
              </div>
              <h3 className="card-title">توسعه مستمر</h3>
              <p className="card-text">
                همواره در تلاش برای بهبود و ارائه جدیدترین ترندهای مد و پوشاک هستیم
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="history-section">
        <div className="container">
          <div className="history-content">
            <div className="history-text" data-aos="fade-right">
              <h2 className="history-title">تاریخچه شیک پوشان</h2>
              <p className="history-description">
                شیک پوشان در سال ۱۳۹۱ با یک هدف ساده شروع به کار کرد: ارائه پوشاک
                با کیفیت و شیک برای ایرانیان. از آن زمان تاکنون، ما با تکیه بر
                کیفیت محصولات و خدمت‌رسانی ممتاز، به یکی از معتبرترین برندهای
                پوشاک در کشور تبدیل شده‌ایم.
              </p>
              <p className="history-description">
                امروز با افتخار به بیش از ۵۰,۰۰۰ مشتری وفادار خدمات ارائه می‌دهیم
                و هر روز در تلاشیم تا با نوآوری و توجه به جزئیات، تجربه‌ای منحصر به فرد
                از خرید پوشاک را برای شما رقم بزنیم.
              </p>
            </div>
            <div className="history-timeline" data-aos="fade-left">
              <div className="timeline-item">
                <div className="timeline-year">۱۳۹۱</div>
                <div className="timeline-content">
                  <h4>تاسیس شیک پوشان</h4>
                  <p>شروع فعالیت با یک شعبه در تهران</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">۱۳۹۵</div>
                <div className="timeline-content">
                  <h4>افتتاح فروشگاه آنلاین</h4>
                  <p>ارائه خدمات خرید اینترنتی به سراسر کشور</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">۱۴۰۰</div>
                <div className="timeline-content">
                  <h4>توسعه محصولات بانوان</h4>
                  <p>اضافه شدن مجموعه کامل پوشاک بانوان</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">خدمات ویژه ما</h2>
            <p className="section-subtitle">همیشه در کنار شما هستیم</p>
          </div>
          <div className="services-grid">
            <div className="service-item" data-aos="zoom-in" data-aos-delay="200">
              <div className="service-icon">
                <Clock />
              </div>
              <h3 className="service-title">پشتیبانی ۲۴ ساعته</h3>
              <p className="service-text">
                کادر مجرب ما به صورت ۲۴ ساعته آنلاین آماده پاسخگویی به سوالات و
                پیگیری سفارشات شما هستند.
              </p>
            </div>

            <div className="service-item" data-aos="zoom-in" data-aos-delay="400">
              <div className="service-icon">
                <MapPin />
              </div>
              <h3 className="service-title">ارسال به سراسر کشور</h3>
              <p className="service-text">
                ارسال سریع و مطمئن سفارشات به تمامی شهرهای ایران با بسته‌بندی
                ویژه و حرفه‌ای.
              </p>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
      *{ font-family:'IRY'!important;     } .about-hero {
        font-family:'IRY'!important;
          position: relative;
          min-height: 90vh;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          color: white;
          overflow: hidden;
          padding: 40px 20px;
          display: flex;
          align-items: center;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.2) 0%, transparent 50%);
        }

        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-text {
          padding-right: 20px;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 24px;
          background: linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .title-accent {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .title-sub {
          font-size: 2.5rem;
          color: #c7d2fe;
        }

        .hero-description {
          direction:rtl!important;
          font-size: 1.25rem;
          line-height: 1.8;
          color: #cbd5e1;
          margin-bottom: 40px;
          max-width: 500px;
        }

        .hero-stats {
          display: flex;
          gap: 40px;
          margin-top: 50px;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .stat-icon {
          background: rgba(255, 255, 255, 0.1);
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .stat-text {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #cbd5e1;
        }

        .hero-image {
          position: relative;
        }

        .image-frame {
          width: 100%;
          height: 400px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 24px;
          transform: perspective(1000px) rotateY(-15deg);
          box-shadow: 
            0 20px 60px rgba(102, 126, 234, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.1);
          overflow: hidden;
        }

        .image-gradient {
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, 
            transparent 30%, 
            rgba(255, 255, 255, 0.1) 50%, 
            transparent 70%);
          animation: shine 3s infinite;
        }

        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .mission-section {
          padding: 100px 20px;
          background: #f8fafc;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 16px;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
        }

        .mission-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .mission-card {
          background: white;
          padding: 40px 30px;
          border-radius: 24px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid #f1f5f9;
        }

        .mission-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        .card-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #667eea 0%, #4b51a2ff 100%);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          color: white;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 16px;
        }

        .card-text {
          color: #64748b;
          line-height: 1.8;
        }

        .history-section {
          padding: 100px 20px;
          background: white;
        }

        .history-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .history-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 24px;
        }

        .history-description {
                  direction:rtl!important;
          font-size: 1.125rem;
          line-height: 1.8;
          color: #475569;
          margin-bottom: 24px;
        }

        .history-timeline {
          position: relative;
          padding-left: 40px;
        }

        .history-timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
               background: linear-gradient(135deg, #667eea 0%, #4b51a2ff 100%);
          border-radius: 2px;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 40px;
        }

        .timeline-year {
          position: absolute;
          left: -60px;
          top: 0;
       background: linear-gradient(135deg, #667eea 0%, #4b51a2ff 100%);
          color: white;
          padding: 8px 16px;
          border-radius: 12px;
          font-weight: 600;
          min-width: 80px;
          text-align: center;
        }

        .timeline-content {
          background: #f8fafc;
          padding: 20px;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
        }

        .timeline-content h4 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 8px;
        }
        .timeline-content p {
          color: #64748b;
          font-size: 0.95rem;
        }

        .services-section {
          padding: 100px 20px;
          background: #f8fafc;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
          max-width: 800px;
          margin: 0 auto;
        }

        .service-item {
          background: white;
          padding: 40px;
          border-radius: 24px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          text-align: center;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .service-item:hover {
          border-color: #667eea;
          transform: translateY(-5px);
        }

        .service-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          color: white;
        }

        .service-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 16px;
        }
        .service-text {
          color: #64748b;
          line-height: 1.8;
        }

        .vision-section {
          position: relative;
          padding: 120px 20px;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          color: white;
          text-align: center;
          overflow: hidden;
        }

        .vision-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 50% 0%, rgba(102, 126, 234, 0.2) 0%, transparent 70%),
            radial-gradient(circle at 100% 100%, rgba(118, 75, 162, 0.2) 0%, transparent 70%);
        }

        .vision-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
        }

        .vision-icon {
          width: 100px;
          height: 100px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 32px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .vision-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 24px;
          background: linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .vision-text {
          font-size: 1.25rem;
          line-height: 1.8;
          color: #cbd5e1;
          margin-bottom: 40px;
        }

        .vision-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 12px 32px;
          border-radius: 50px;
          font-weight: 600;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @media (max-width: 992px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
          }

          .hero-text {
            padding-right: 0;
          }

          .hero-description {
                    direction:rtl!important;
            max-width: 100%;
          }

          .hero-stats {
            justify-content: center;
          }

          .history-content {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .image-frame {
            max-width: 500px;
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .title-sub {
            font-size: 2rem;
          }

          .hero-stats {
            flex-direction: column;
            align-items: center;
            gap: 30px;
          }

          .section-title,
          .history-title,
          .vision-title {
            font-size: 2rem;
          }

          .mission-cards,
          .services-grid {
            grid-template-columns: 1fr;
          }

          .timeline-year {
            position: relative;
            left: 0;
            margin-bottom: 12px;
            display: inline-block;
          }

          .history-timeline {
            padding-left: 0;
          }

          .history-timeline::before {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .title-sub {
            font-size: 1.5rem;
          }

          .hero-description {
          
                    direction:rtl!important;
            font-size: 1.125rem;
          }

          .mission-card,
          .service-item {
            padding: 30px 20px;
          }
        }
      `}</style>
    </>
  );
}

export default AboutPage;