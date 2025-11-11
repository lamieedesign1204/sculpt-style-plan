import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Đăng nhập thành công!",
        description: "Chào mừng bạn trở lại FitFlow",
      });
    }, 1500);
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Đăng ký thành công!",
        description: "Tài khoản của bạn đã được tạo",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto max-w-md">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2">Chào mừng đến FitFlow</h1>
          <p className="text-muted-foreground">Đăng nhập hoặc tạo tài khoản mới</p>
        </div>

        <Card className="border-2 hover:border-primary/50 transition-colors animate-fade-in">
          <CardHeader>
            <CardTitle>Xác thực</CardTitle>
            <CardDescription>Truy cập vào tài khoản của bạn</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Đăng nhập</TabsTrigger>
                <TabsTrigger value="register">Đăng ký</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Mật khẩu</Label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="••••••••"
                      required
                      className="rounded-lg"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full rounded-full"
                    disabled={isLoading}
                  >
                    {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-name">Họ và tên</Label>
                    <Input
                      id="register-name"
                      type="text"
                      placeholder="Nguyễn Văn A"
                      required
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-phone">Số điện thoại</Label>
                    <Input
                      id="register-phone"
                      type="tel"
                      placeholder="0123456789"
                      required
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password">Mật khẩu</Label>
                    <Input
                      id="register-password"
                      type="password"
                      placeholder="••••••••"
                      required
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-confirm">Xác nhận mật khẩu</Label>
                    <Input
                      id="register-confirm"
                      type="password"
                      placeholder="••••••••"
                      required
                      className="rounded-lg"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full rounded-full"
                    disabled={isLoading}
                  >
                    {isLoading ? "Đang tạo tài khoản..." : "Đăng ký"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Bằng cách tiếp tục, bạn đồng ý với Điều khoản dịch vụ và Chính sách bảo mật của chúng tôi
        </p>
      </div>
    </div>
  );
};

export default Auth;
