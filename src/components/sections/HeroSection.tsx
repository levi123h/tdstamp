import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <Image
          src="https://images.pexels.com/photos/6445417/pexels-photo-6445417.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Cận cảnh các con dấu và dụng cụ văn phòng"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#2a0f1c]/90 via-[#55122a]/85 to-[#7a1436]/80" />

      <Container className="py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            TDSTAMP: Thương Hiệu Con Dấu Quốc Dân – 30 Năm Khẳng Định Để Vươn Xa
          </h1>
          <p className="mt-5 text-pretty text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            Xuất phát từ một cơ sở khắc dấu đầu thập niên 90, TDStamp mang khát
            vọng tạo nên sản phẩm con dấu chất lượng cao cho người Việt, do người
            Việt sản xuất. Hơn 30 năm nỗ lực đã đưa TDStamp trở thành thương hiệu
            dẫn đầu thị trường, phủ sóng 34 tỉnh thành, và từng bước vươn tầm quốc tế.
          </p>

          <div className="mt-7 flex justify-center">
            <Button href="#contact">NHẬN BÁO GIÁ SỈ</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

