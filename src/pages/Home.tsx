import { Calendar, TrendingUp, ClipboardList, Bell, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
