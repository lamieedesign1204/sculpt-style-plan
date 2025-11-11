import { Calendar, TrendingUp, ClipboardList, Bell, ChevronDown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: Calendar,
      title: "Booking Schedule",
      description: "Đặt lịch tập luyện linh hoạt theo thời gian của bạn",
    },
    {
      icon: TrendingUp,
      title: "Tracking Exercise",
      description: "Theo dõi tiến độ và cải thiện hiệu suất tập luyện",
    },
    {
      icon: ClipboardList,
      title: "Workout Plans",
      description: "Kế hoạch tập luyện được thiết kế riêng cho bạn",
    },
    {
      icon: Bell,
      title: "SMS Notifications",
      description: "Nhắc nhở qua SMS để không bỏ lỡ buổi tập nào",
    },
  ];

  const testimonials = [
    {
      name: "Nguyễn Minh Anh",
      role: "Học viên",
      rating: 5,
      feedback: "Ứng dụng thật sự đã thay đổi cuộc sống của tôi! Giao diện đẹp, dễ sử dụng và tính năng nhắc lịch qua SMS rất tiện lợi.",
      avatar: "MA"
    },
    {
      name: "Trần Hoàng Long",
      role: "Thành viên VIP",
      rating: 5,
      feedback: "Các bài tập được thiết kế khoa học và phù hợp với từng body type. Sau 3 tháng tôi đã thấy sự thay đổi rõ rệt!",
      avatar: "HL"
    },
    {
      name: "Lê Thu Hà",
      role: "Học viên mới",
      rating: 4,
      feedback: "Tôi là người mới bắt đầu nhưng nhờ có hướng dẫn chi tiết, tôi đã tự tin hơn rất nhiều. Hệ thống tracking giúp tôi theo dõi tiến độ dễ dàng.",
      avatar: "TH"
    },
    {
      name: "Phạm Đức Anh",
      role: "Thành viên",
      rating: 5,
      feedback: "Tính năng đặt lịch linh hoạt và SMS nhắc lịch giúp tôi không bao giờ bỏ lỡ buổi tập. Đội ngũ support cũng rất nhiệt tình!",
      avatar: "DA"
    }
  ];

  const faqs = [
    {
      question: "Làm thế nào để đặt lịch tập?",
      answer: "Bạn chỉ cần đăng nhập vào tài khoản, chọn thời gian phù hợp trong lịch và xác nhận đặt chỗ. Hệ thống sẽ gửi SMS xác nhận cho bạn.",
    },
    {
      question: "Tôi có thể thay đổi kế hoạch tập luyện không?",
      answer: "Có, bạn hoàn toàn có thể tùy chỉnh kế hoạch tập luyện của mình bất cứ lúc nào. Hệ thống sẽ điều chỉnh theo mục tiêu và thể trạng hiện tại của bạn.",
    },
    {
      question: "Ứng dụng có phù hợp với người mới bắt đầu không?",
      answer: "Chắc chắn rồi! Chúng tôi có các bài tập và kế hoạch dành riêng cho người mới bắt đầu, với hướng dẫn chi tiết từng bước.",
    },
    {
      question: "Tôi có nhận được nhắc nhở về buổi tập không?",
      answer: "Có, hệ thống sẽ tự động gửi SMS nhắc nhở trước buổi tập để bạn không bỏ lỡ lịch đã đặt.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Transform Your Body
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Nền tảng workout thông minh giúp bạn đạt được mục tiêu thể chất một cách hiệu quả và bền vững
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/auth">
              <Button size="lg" className="rounded-full text-lg px-8">
                Bắt đầu ngay
              </Button>
            </Link>
            <Link to="/workouts">
              <Button size="lg" variant="outline" className="rounded-full text-lg px-8">
                Khám phá bài tập
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Tính năng nổi bật</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
              >
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-5xl font-bold text-primary">10K+</h3>
              <p className="text-xl text-muted-foreground">Thành viên tích cực</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-5xl font-bold text-primary">500+</h3>
              <p className="text-xl text-muted-foreground">Bài tập đa dạng</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-5xl font-bold text-primary">95%</h3>
              <p className="text-xl text-muted-foreground">Hài lòng</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Khách hàng nói gì về chúng tôi</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Hàng ngàn người đã tin tưởng và đạt được mục tiêu của họ
          </p>
          <div className="max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                    <Card className="border-2 hover:border-primary/50 transition-all duration-300 h-full">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                            {testimonial.avatar}
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg mb-1">{testimonial.name}</CardTitle>
                            <p className="text-sm text-muted-foreground mb-2">{testimonial.role}</p>
                            <div className="flex gap-1">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < testimonial.rating
                                      ? "fill-primary text-primary"
                                      : "text-muted-foreground/30"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                          "{testimonial.feedback}"
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12">Câu hỏi thường gặp</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-2xl px-6 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto text-center text-primary-foreground">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sẵn sàng thay đổi cuộc sống?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Tham gia cộng đồng FitFlow ngay hôm nay
          </p>
          <Link to="/auth">
            <Button size="lg" variant="secondary" className="rounded-full text-lg px-8">
              Đăng ký miễn phí
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
