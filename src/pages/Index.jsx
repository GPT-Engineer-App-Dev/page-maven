import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Package2, User, CheckCircle, DollarSign } from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Welcome to SaaSify</h1>
        <p className="text-lg text-muted-foreground">Your ultimate SaaS solution</p>
        <Button size="lg" className="mt-4">Get Started</Button>
        <img src="/placeholder.svg" alt="Hero Image" className="mx-auto mt-8 w-1/2" />
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Features</h2>
        <p className="text-center text-muted-foreground">Discover what makes us unique</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader>
              <Package2 className="h-8 w-8 text-primary" />
              <CardTitle>Feature One</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Short description of feature one.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Package2 className="h-8 w-8 text-primary" />
              <CardTitle>Feature Two</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Short description of feature two.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Package2 className="h-8 w-8 text-primary" />
              <CardTitle>Feature Three</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Short description of feature three.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Package2 className="h-8 w-8 text-primary" />
              <CardTitle>Feature Four</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Short description of feature four.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Avatar>
                <Avatar.Image src="/placeholder.svg" alt="Customer Photo" />
                <Avatar.Fallback>JD</Avatar.Fallback>
              </Avatar>
              <CardTitle>John Doe</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"This service is amazing! It has changed the way I work."</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Avatar>
                <Avatar.Image src="/placeholder.svg" alt="Customer Photo" />
                <Avatar.Fallback>JS</Avatar.Fallback>
              </Avatar>
              <CardTitle>Jane Smith</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"A must-have tool for any professional."</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Avatar>
                <Avatar.Image src="/placeholder.svg" alt="Customer Photo" />
                <Avatar.Fallback>AB</Avatar.Fallback>
              </Avatar>
              <CardTitle>Alex Brown</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"Exceptional quality and support. Highly recommend!"</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <DollarSign className="h-8 w-8 text-primary" />
              <CardTitle>Basic</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">$10/month</p>
              <ul className="mt-4 space-y-2">
                <li><CheckCircle className="inline-block mr-2 text-primary" />Feature A</li>
                <li><CheckCircle className="inline-block mr-2 text-primary" />Feature B</li>
                <li><CheckCircle className="inline-block mr-2 text-primary" />Feature C</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <DollarSign className="h-8 w-8 text-primary" />
              <CardTitle>Standard</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">$20/month</p>
              <ul className="mt-4 space-y-2">
                <li><CheckCircle className="inline-block mr-2 text-primary" />Feature A</li>
                <li><CheckCircle className="inline-block mr-2 text-primary" />Feature B</li>
                <li><CheckCircle className="inline-block mr-2 text-primary" />Feature C</li>
                <li><CheckCircle className="inline-block mr-2 text-primary" />Feature D</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <DollarSign className="h-8 w-8 text-primary" />
              <CardTitle>Premium</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">$30/month</p>
              <ul className="mt-4 space-y-2">
                <li><CheckCircle className="inline-block mr-2 text-primary" />Feature A</li>
                <li><CheckCircle className="inline-block mr-2 text-primary" />Feature B</li>
                <li><CheckCircle className="inline-block mr-2 text-primary" />Feature C</li>
                <li><CheckCircle className="inline-block mr-2 text-primary" />Feature D</li>
                <li><CheckCircle className="inline-block mr-2 text-primary" />Feature E</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="space-y-4 text-center">
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-muted-foreground">About</a>
          <a href="#" className="text-muted-foreground">Privacy Policy</a>
          <a href="#" className="text-muted-foreground">Contact</a>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-muted-foreground">Facebook</a>
          <a href="#" className="text-muted-foreground">Twitter</a>
          <a href="#" className="text-muted-foreground">LinkedIn</a>
        </div>
        <p className="text-muted-foreground">&copy; 2023 SaaSify. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;