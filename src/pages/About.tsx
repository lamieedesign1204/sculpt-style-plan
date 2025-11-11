import { Code, Database, Server, Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const techStack = [
    {
      icon: Code,
      title: "Frontend",
      tech: "React + Vite + MUI",
      description: "Giao diện người dùng hiện đại, responsive và tối ưu hiệu suất",
      color: "text-blue-500",
    },
    {
      icon: Server,
      title: "Backend",
      tech: "Java Spring Boot",
      description: "API mạnh mẽ, bảo mật và có khả năng mở rộng cao",
      color: "text-green-500",
    },
    {
      icon: Database,
      title: "Database",
      tech: "MySQL",
      description: "Lưu trữ dữ liệu an toàn và hiệu quả",
      color: "text-orange-500",
    },
    {
      icon: Package,
      title: "DevOps",
      tech: "Docker",
      description: "Triển khai và quản lý ứng dụng dễ dàng",
      color: "text-cyan-500",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Về FitFlow
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Nền tảng quản lý workout toàn diện, được xây dựng với công nghệ hiện đại nhất
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="text-3xl">Sứ mệnh của chúng tôi</CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
              <p>
                FitFlow được tạo ra với mục tiêu giúp mọi người dễ dàng tiếp cận và duy trì lối sống lành mạnh.
                Chúng tôi tin rằng công nghệ có thể làm cho việc tập luyện trở nên đơn giản, thú vị và hiệu quả hơn.
              </p>
              <p>
                Với sự kết hợp giữa các tính năng thông minh như đặt lịch tập, theo dõi tiến độ, kế hoạch workout 
                cá nhân hóa và nhắc nhở qua SMS, chúng tôi mang đến trải nghiệm tập luyện tốt nhất cho bạn.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Công nghệ sử dụng</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techStack.map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <item.icon className={`h-12 w-12 ${item.color}`} />
                    <div>
                      <CardTitle className="text-2xl">{item.title}</CardTitle>
                      <p className="text-primary font-semibold">{item.tech}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Architecture Section */}
        <section className="mb-20">
          <Card className="border-2 hover:border-primary/50 transition-colors bg-secondary/30">
            <CardHeader>
              <CardTitle className="text-3xl">Kiến trúc hệ thống</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-6 rounded-xl bg-background border-2 border-border">
                  <h3 className="font-bold text-xl mb-2 text-primary">Frontend Layer</h3>
                  <p className="text-muted-foreground">React + MUI components với Vite build tool</p>
                </div>
                <div className="p-6 rounded-xl bg-background border-2 border-border">
                  <h3 className="font-bold text-xl mb-2 text-primary">Backend Layer</h3>
                  <p className="text-muted-foreground">Spring Boot RESTful API services</p>
                </div>
                <div className="p-6 rounded-xl bg-background border-2 border-border">
                  <h3 className="font-bold text-xl mb-2 text-primary">Data Layer</h3>
                  <p className="text-muted-foreground">MySQL database với Docker container</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Team Values */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-12">Giá trị cốt lõi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Đơn giản</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Giao diện thân thiện, dễ sử dụng cho mọi đối tượng
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Hiệu quả</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tối ưu hóa quy trình tập luyện và theo dõi tiến độ
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Cá nhân hóa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Kế hoạch workout phù hợp với từng cá nhân
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
