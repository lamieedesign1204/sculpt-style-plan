import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Workouts = () => {
  const bodyTypes = [
    {
      type: "Ectomorph",
      title: "Người gầy - Khó tăng cân",
      description: "Dáng người gầy, khung xương nhỏ, trao đổi chất nhanh",
      color: "bg-blue-500",
      exercises: [
        {
          name: "Compound Exercises",
          detail: "Squat, Deadlift, Bench Press - Tập trọng lượng nặng, ít rep",
        },
        {
          name: "Progressive Overload",
          detail: "Tăng dần trọng lượng mỗi tuần để kích thích tăng trưởng cơ",
        },
        {
          name: "Limited Cardio",
          detail: "Giảm cardio, tập trung vào tập tạ để tối ưu tăng cơ",
        },
      ],
    },
    {
      type: "Mesomorph",
      title: "Người cơ bắp - Dễ phát triển",
      description: "Khung xương to, cơ bắp phát triển tốt, trao đổi chất cân bằng",
      color: "bg-green-500",
      exercises: [
        {
          name: "Balanced Training",
          detail: "Kết hợp tập tạ và cardio với tỷ lệ cân bằng",
        },
        {
          name: "Variety Exercises",
          detail: "Đa dạng bài tập: HIIT, CrossFit, Weightlifting",
        },
        {
          name: "Moderate Volume",
          detail: "8-12 reps, 3-4 sets, nghỉ ngơi vừa phải",
        },
      ],
    },
    {
      type: "Endomorph",
      title: "Người mập - Dễ tăng cân",
      description: "Khung xương to, dễ tích mỡ, trao đổi chất chậm",
      color: "bg-orange-500",
      exercises: [
        {
          name: "High Intensity Cardio",
          detail: "HIIT, Circuit training để đốt cháy calories hiệu quả",
        },
        {
          name: "Full Body Workouts",
          detail: "Tập toàn thân 3-4 lần/tuần với nhiều rep",
        },
        {
          name: "Active Lifestyle",
          detail: "Tăng hoạt động hàng ngày, đi bộ, leo cầu thang",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Bài tập theo Body Type
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Tìm hiểu loại cơ thể của bạn và khám phá các bài tập phù hợp để đạt hiệu quả tốt nhất
          </p>
        </div>

        {/* Body Types Grid */}
        <div className="space-y-8">
          {bodyTypes.map((bodyType, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50 animate-fade-in"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Badge className={`${bodyType.color} text-white text-lg px-4 py-2`}>
                    {bodyType.type}
                  </Badge>
                </div>
                <CardTitle className="text-3xl">{bodyType.title}</CardTitle>
                <CardDescription className="text-lg">{bodyType.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {bodyType.exercises.map((exercise, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-colors"
                    >
                      <h4 className="font-bold text-lg mb-2 text-primary">{exercise.name}</h4>
                      <p className="text-muted-foreground">{exercise.detail}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* General Tips */}
        <section className="mt-20">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="text-3xl">Lời khuyên chung</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-background border-2 border-border">
                  <h3 className="font-bold text-xl mb-3 text-primary">Dinh dưỡng</h3>
                  <p className="text-muted-foreground">
                    Ăn đủ protein (1.6-2.2g/kg), carbs và chất béo lành mạnh. Uống đủ nước 2-3 lít/ngày.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-background border-2 border-border">
                  <h3 className="font-bold text-xl mb-3 text-primary">Nghỉ ngơi</h3>
                  <p className="text-muted-foreground">
                    Ngủ đủ 7-9 giờ/đêm. Tập 4-5 lần/tuần, để cơ thể phục hồi giữa các buổi tập.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-background border-2 border-border">
                  <h3 className="font-bold text-xl mb-3 text-primary">Consistency</h3>
                  <p className="text-muted-foreground">
                    Kiên trì là chìa khóa. Duy trì lịch tập đều đặn ít nhất 3 tháng để thấy kết quả rõ rệt.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-background border-2 border-border">
                  <h3 className="font-bold text-xl mb-3 text-primary">Form đúng</h3>
                  <p className="text-muted-foreground">
                    Kỹ thuật đúng quan trọng hơn trọng lượng. Học động tác chuẩn để tránh chấn thương.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Workouts;
